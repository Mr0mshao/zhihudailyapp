//模块内部的 action、mutation、和 getter 现在仍然注册在全局命名空间
//——样保证了多个模块能够响应同一 mutation 或 action。
//你可以通过添加前缀或后缀的方式隔离各模块，以避免名称冲突。


// actions types
export const FECTH_NEWS_LATEST = 'FECTH_NEWS_LATEST'                // 最新消息列表
export const FECTH_NEWS_LATEST_MORE = 'FECTH_NEWS_LATEST_MORE'      // 更多消息
export const FETCH_NEWS_DETAIL = 'FETCH_NEWS_DETAIL'                // 详细信息
export const FETCH_THEMES = 'FETCH_THEMES'                          // 日报主题
export const FETCH_THEMES_list = 'FETCH_THEMES_list'                // 日报主题进去的列表

// mutations types
export const TOGGLE_NEWS_LATEST = 'TOGGLE_NEWS_LATEST'              // 最新消息列表
export const TOGGLE_NEWS_LATEST_MORE = 'TOGGLE_NEWS_LATEST_MORE'    // 更多消息
export const TOGGLE_NEWS_DETAIL = 'TOGGLE_NEWS_DETAIL'              // 详细信息
export const TOGGLE_THEMES = 'TOGGLE_THEMES'                        // 日报主题
export const TOGGLE_THEMES_LIST = 'TOGGLE_THEMES_LIST'              // 日报主题进去的列表       

//  getters types
export const DONE_LOADING = 'DONE_LOADING'                  // loading
export const DONE_NEWS_LIST_ROOT = 'DONE_NEWS_LIST_ROOT'            // 最新消息列表梗
export const DONE_NEWS_LATEST = 'DONE_NEWS_LATEST'                  // 最新消息列表
export const DONE_NEWS_LATEST_MORE = 'DONE_NEWS_LATEST_MORE'        // 更多消息
export const DONE_NEWS_DETAIL = 'DONE_NEWS_DETAIL'                  // 详细信息
export const DONE_THEMES = 'DONE_THEMES'                            // 日报主题
export const DONE_THEMES_LIST = 'DONE_THEMES_LIST' 
