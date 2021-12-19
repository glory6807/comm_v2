import _default from "atob";

const _SAVE = 'DATA_SAVE';
const _SELECT = 'DATA_SELECT';
const _EDIT = 'DATA_EDIT';
const _DELETE = 'DATA_DELETE';

// ★★★★★ 임시 테스트용 reducer ★★★★★
// ★★★★★ 임시 테스트용 reducer ★★★★★
// ★★★★★ 임시 테스트용 reducer ★★★★★
// ★★★★★ 임시 테스트용 reducer ★★★★★
// ★★★★★ 임시 테스트용 reducer ★★★★★

export const dataSave = (inputData) => ({
    type: _SAVE,
    inputData: {
        id: inputData.id,
        title: inputData.title,
        content: inputData.content
    }
})

export const selectRow = (id) => (
    console.log('board reducer : id : ', id),
    {
        type: _SELECT,
        inputData: {
            id: id,
        }
    }
)

export const editContent = (inputData) => (
    console.log('board reducer : edit : ', inputData),
    {
        type: _EDIT,
        inputData: {
            id: inputData.id,
            title: inputData.title,
            content: inputData.content
        }
    }
)

export const removeContent = (id) => ({
    type: _DELETE,
    inputData: {
        id: id,
    }
})

const initialState = {
    lastId: 0,
    inputData: [
        {
            id:'',
            title:'',
            content:''
        }
    ],
    selectRowData: {}
}

export default function boardReducer(state = initialState, action){
    switch(action.type){
        case _SAVE:
            console.log(state.inputData);
            return {
                lastId: state.lastId + 1,
                inputData: state.inputData.concat({
                    ...action.inputData,
                    id: state.lastId + 1,
                })
            }
        
        case _SELECT:
            console.log(action);
            return {
                ...state,
                selectRowData: state.inputData.find(row => row.id === action.inputData.id)
            }

        case _EDIT:
            return {
                ...state,
                inputData: state.inputData.map(row =>
                    row.id === action.inputData.id ?
                    {...action.inputData} : row
                ),
                selectRowData: {}
            }

        case _DELETE:
            return {
                lastId: state.lastId === action.inputData.id ? state.lastId - 1 : state.lastId,
                inputData: state.inputData.filter(row =>
                    row.id !== action.inputData.id
                ),
                selectRowData: {}
            }

        default:
            return state;
    }
}