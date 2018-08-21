<template>
  <div id="mountNode"></div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {}
    },
    methods: {
      read() {
        axios.get('http://localhost:8080/src/assets/data/index.json').then(res => {
          const {forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide} = d3;
          const Template = G6.Plugins['template.maxSpanningForest'];//插件集
          const Mapper = G6.Plugins['tool.d3.mapper'];
          const nodeSizeMapper = new Mapper('node', 'totalValue', 'size', [10, 20], {
            legendCfg: null
          });
          const edgeSizeMapper = new Mapper('edge', 'value', 'size', [2, 10], {
            legendCfg: null
          });
          // '#91D5FF','#69C0FF',
          const nodeColorMapper = new Mapper('node', 'totalValue', 'color', ['#3DA0F2', '#1581E6', '#0860BF'], {legendCfg: null});
          const force = {
            execute() {
              const nodes = this.nodes;
              const edges = this.edges;
              const graph = this.graph;
              const width = graph.getWidth();
              const height = graph.getHeight();
              const simulation = forceSimulation(nodes)
                .force('charge', forceManyBody().distanceMax(width * 3))
                .force('link', forceLink(G6.Util.cloneDeep(edges))
                  .id(model => {
                    return model.id;
                  })
                  .strength(1)
                )
                .force('center', forceCenter(width / 2, height / 2))
                .force('collision', forceCollide().radius(model => {
                  return model.width / 2 * 4;
                }));
              simulation.stop();
              for (let i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
                simulation.tick();
              }
              nodes.forEach(node => {
                delete node.vx;
                delete node.vy;
              });
            }
          };

          const template = new Template();
          // 图
          const graph = new G6.Graph({
            id: 'mountNode', // dom id
            // 画布高度
            height: window.innerHeight,
            width: window.innerWidth,
            fitView:'autoZoom',
            layout: {
              processer: force//布局处理器
            },
            plugins: [template, nodeSizeMapper, nodeColorMapper, edgeSizeMapper],
            animate: true,//是否开启动画
          });
          // 画点
          graph.node({
            label(model) {
              return {
                text: 'ip:' + model.id + ' ,totalValue:' + model.totalValue
              };
            }
          });
          //画边
          graph.edge({
            style(model) {
              return {
                stroke: graph.find(model.target).getModel().color,
                // 不透明度
                strokeOpacity: 0.8
              };
            },
            label(model) {
              return {
                text: model.value
              }
            }
          });
          graph.read(res.data);//读取并渲染图数据

          // 鼠标移入节点显示 label
          function tryHideLabel(msg) {
            const model = msg.getModel();
            const label = msg.getLabel();
            const labelBox = label.getBBox();
            if (labelBox.maxX - labelBox.minX > model.size) {
              label.hide();
              graph.draw();
            }
          }

          const nodes = graph.getNodes();
          const edges = graph.getEdges();

          nodes.forEach(node => {
            tryHideLabel(node);
          });
          // 鼠标器
          graph.on('node:mouseenter', ev => {
            const item = ev.item;
            graph.toFront(item);
            item.getLabel().show();
            graph.draw();
          });

          graph.on('node:mouseleave', ev => {
            const item = ev.item;
            tryHideLabel(item);
          });
        });
      }
    },
    created() {
      this.read()
    }
  }
</script>

<style>
</style>
