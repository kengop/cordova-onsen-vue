export default {
    modules: {
        navigator: {
            strict: true,
            namespaced: true,
            state: {
                stack: [],
                options: {}
            },
            mutations: {
                push(state, page){
                    state.stack.push(page);
                },
                pop(state){
                    if(state.stack.length > 1){
                        state.stack.pop();
                    }
                },
                replace(state, page){
                    state.stack.pop();
                    state.stack.push(page);
                },
                reset(state, page){
                    state.stack = [page || state.stack[0]];
                },
                options(state, newOptions = {}){
                    state.options = newOptions;
                }
            }
        },
        splitter: {
            strict: true,
            namespaced: true,
            state: {
                open: false
            },
            mutations: {
                toggle(state, shouldOpen){
                    if (shouldOpen instanceof Boolean) {
                        state.open = shouldOpen;
                    } else {
                        state.open = !state.open;
                    }
                }
            }
        },
        tabbar: {
            strict: true,
            namespaced: true,
            state: {
                index: 0
            },
            mutations: {
                set(state, index){
                    state.index = index;
                }
            }
        },
        page2: {
            strict: true, // 厳格（strict）モード
            // 厳格モードでは Vuex の状態がミューテーションハンドラの外部で変更されたら、エラーを投げるようになる
            // 本番環境で厳格モードを有効にしてデプロイしてはいけません
            namespaced: true,
            state: {
                name: ''
            },
            mutations: {
                set(state, text){
                    state.name = text;
                }
            }
        }
    }
};