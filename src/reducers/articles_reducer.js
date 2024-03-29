export default function(state = {}, action) {
  switch (action.type) {
    case "GET_LATEST":
      return { ...state, latest: action.payload };
    case "GET_OTHER":
      return { ...state, other: action.payload };
    case "GET_SELECTED_NEWS":
      return { ...state, selected: action.payload };
    case "CLEAR_SELECTED_NEWS":
      return { ...state, selected: action.payload };
    case "HANDLE_LIKES_ARTICLE":
      console.log(
        "article_reducer : HANDLE_LIKES_ARTICLE : response ",
        action.payload,
        "inside array : ",
        [action.payload]
      );
      return { ...state, selected: [action.payload] };
    default:
      return state;
  }
}
