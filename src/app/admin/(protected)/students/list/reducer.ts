import { stat } from "fs";

const pagerState = {
    pageCount: 1,
    pageNumber: 1,
  }
  
export type PagerState = typeof pagerState;
  
  function pagerReducer(reducer: PagerState, action: {type: string, pageCount: number, pageNumber: number}): PagerState{
    let newPage;
  
    switch(action.type){
      case "set_page_count":
        return {
          pageCount: action.pageCount,
          pageNumber: reducer.pageNumber
        }
      case "go_to_page":
        return {
          pageCount: reducer.pageCount,
          pageNumber: action.pageNumber
        }
      case "next_page":
        if(reducer.pageNumber <= reducer.pageCount){
          newPage = reducer.pageNumber + 1
        }else{
          newPage = reducer.pageNumber
        }
        return {
          pageCount: reducer.pageCount,
          pageNumber: newPage
        }
      case "prev_page":
        if(reducer.pageNumber > 0){
          newPage = reducer.pageNumber - 1
        }else{
          newPage = reducer.pageNumber
        }
        return {
          pageCount: reducer.pageCount,
          pageNumber: newPage
        }
      default:
        throw("Action does not exist")
    }
  }

  const searchSetting = {
    name: "",
    grade: "",
    section: ""
  }

  export type SearchSetting = typeof searchSetting

  //set name
  //select grade
  //select section
  function searchSettingReducer(state: SearchSetting, action:{type: string, name?: string, grade?: string, section?:string} ): 
  SearchSetting{
    switch(action.type){
        case "set_name":
            return {...state, name: action.name ?? state.name};
        case "select_grade":
            
            return {...state, grade: action.grade ?? state.grade};
        case "select_section":
            
            return {...state, section: action.section ?? state.section};
        default:
            throw("Action does not exist");
    }
  }

  export {pagerState, pagerReducer, searchSetting, searchSettingReducer}