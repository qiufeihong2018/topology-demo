<template>
  <div id="mountNode"></div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
      }
    },
    methods:{
      read(){
        axios.get('http://localhost:8080/src/assets/data/g6-index-dev2.json').then(res => {
          const {forceSimulation, forceLink, forceManyBody, forceCenter, forceCollide} = d3;
          const Template = G6.Plugins['template.maxSpanningForest'];//插件集
          const Mapper = G6.Plugins['tool.d3.mapper'];
          const nodeSizeMapper = new Mapper('node', 'totalValue', 'size', [8, 20], {
            legendCfg: null
          });
          const edgeSizeMapper = new Mapper('edge', 'value', 'size', [1, 8], {
            legendCfg: null
          });
          const nodeColorMapper = new Mapper('node', 'totalValue', 'color', ['#E0F5FF', '#BAE7FF', '#91D5FF', '#69C0FF', '#3DA0F2', '#1581E6', '#0860BF'], {
            legendCfg: null
          });
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
                  return model.width / 2 * 1.2;
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
          const graph = new G6.Graph({
            id: 'mountNode', // dom id
            // 画布高度
            height: window.innerHeight,
            layout: {
              processer: force//布局处理器
            },
            plugins: [template, nodeSizeMapper, nodeColorMapper, edgeSizeMapper],
            animate: true,//是否开启动画
          });
          graph.edge({
            style(model) {
              return {
                stroke: graph.find(model.target).getModel().color,
                strokeOpacity: 0.8
              };
            }
          });//画边
          graph.read(res.data);//读取并渲染图数据
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
