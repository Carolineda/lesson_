/**
 * 评论模板
 * [
 * {username:'',content:''}
 * 
 * ]
 * 
 */
/**
 * 
 * type:单独放置于单独目录
 */
export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      const { username, content } = action;
      return [{ username, content }, ...state];
    default:
      return state;
  }
}