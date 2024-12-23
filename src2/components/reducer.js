import { INCREMENT_VOTE, RESET_VOTES, ADD_OPTION } from './actions';

const initialState = {
    options: [
      { 
        id: 1, 
        title: "jamal musala", 
        votes: 0, 
        image: "/images/jamal.jpg"
      },
      { 
        id: 2, 
        title: "lamine yamal", 
        votes: 0 ,
        image: "/images/19.jpg"
      },
      { 
        id: 3, 
        title: "arda guler ", 
        votes: 0 ,
        image: "/images/arda.jpg"
      },
    ],
  };
  
  

/*let nextId = 3;*/

const votingReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_VOTE:
      return {
        ...state,
        options: state.options.map((option) =>
          option.id === action.payload
            ? { ...option, votes: option.votes + 1 }
            : option
        ),
      };

    case RESET_VOTES:
      return {
        ...state,
        options: state.options.map((option) => ({
          ...option,
          votes: 0,
        })),
      };

    /*case ADD_OPTION:
      return {
        ...state,
        options: [
          ...state.options,
          { id: nextId++, title: action.payload, votes: 0 },
        ],
      };
    }*/

    default:
      return state;

};
}


export default votingReducer;