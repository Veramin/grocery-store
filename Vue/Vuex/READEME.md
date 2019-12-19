
1. 同步提交 => mutations commit state

2. 异步提交 => action  dispatch  getters

3. 只有store.commit()才可以触发mutations里边的方法。

4. 由于 *** store 中的状态是响应式的 ***，在组件中调用 store 中的状态仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation
+ 调用state => computed中返回状态
+ 触发变化 => 提交mutations

5. *** 情景：1组件n状态 ***

  之前的做法：用计算属性声明状态
  局限性: 计算属性表现出重复冗余
  优化: 使用``` mapState ```辅助函数，帮助我们生成计算属性
  ``` javascript
  import { mapState } from 'vuex'

  export default{
    computed: mapState({
      count: state => state.count,
      countAlas: 'count',
      contPlusLocalState(state) {
        return state.count + this.localCount
      }
    })

  }
  ```

  ## 6. Getter

    使用场景: 从store中的state中派生出一些状态，例如对列表过滤并且计数

    ``` javascript
      computed() {
        doneTodosCount() {
          return this.$store.state.todos.filter(todo => todo.done).length
        }
      }
      /**
       * 如果多个组件要用到doneTodosCount这个属性，要么复制这个函数，要么抽 * 取到一个共享函数然后在多处导入它，但是都不是最理想的方案
       * 所以，getter就诞生了
      */
    ```

    getters接受的参数：第一个：state

    ### 如何在getters设置属性
    ``` javascript
    /**
     * getter可以被看作是store的计算属性，它的返回值会根据它的依赖被缓存起来
     * 只有当依赖值发生变化的时候才从新计算
    */
      const store = new Vuex.Store({
        state: {
          todos:[
            { id: 1, text: '1', done: true }
            { id: 2, text: '2', done: false }
          ]
        },
        getters: {
          doneTodos: state => {
            return state.todos.filter(todo => todo.done)
          }
        }
      })

    ```

    ### 如何访问在getters设置的属性

    Getter会暴露store.getters对象
    访问形式如下：
    1. 属性访问
    ``` javascript
      store.getters.doneTodos
    ```

    2. 方法访问
    通过让getter返回一个函数，来实现给getter传参

    ``` javascript
      const store = new Vuex.Store({
      state: {
        todos:[
          { id: 1, text: '1', done: true }
          { id: 2, text: '2', done: false }
        ]
      },
      getters: {
        getTodoById: (state) => (id) => {
          return state.todos.find(todo => todo.id === id)
        }
      }
      })

    ```

    ``` javascript
      store.getters.getTodoById(2)

    ```
    > 1. getter在通过方法访问的时候，每次都会去进行调用，并且不会缓存结果。
      2. *** 这种方法特别适合对store的数组进行查询。 ***

    ### mapGetters 辅助函数

      作用：只是把store中的getter映射到局部计算属性
      ``` javascript
        import { mapGetters } from 'Vuex'

        export default {
          computed: {
            ...mapGetters({
              'doneTodosCount',
              'anotherGetter',
            })
          }
        }
      ```

      ``` javascript
        /**
         * 给某一个getter属性取别名
        */
        import { mapGetters } from 'Vuex'

        export default {
          computed: {
            mapGetters({
              doneCount: 'doneTodosCount'
            })
          }
        }
      ```

