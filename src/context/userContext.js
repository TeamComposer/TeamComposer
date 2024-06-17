import createContext from './createUserContext';

const initialState = {
    infos: {},
    infosAluno: {},
    team: {},
    teamid: '',
    papel: 'Aluno',

};

const reducer = (stateUser, action) => {
  switch (action.type) {
    case 'infos':
      return { ...stateUser, infos: action.payload };
    case 'infosAluno':
      return { ...stateUser, infosAluno: action.payload };
    case 'team':
      return { ...stateUser, team: action.payload };
    case 'teamid':
      return { ...stateUser, teamid: action.payload };
    case 'papel':
      return { ...stateUser, papel: action.payload };
    default:
      return stateUser;
  }
};

const setInfos = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'infos', payload: obj });
  };
};

const setInfosAluno = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'infosAluno', payload: obj });
  };
};

const setTeam = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'team', payload: obj });
  };
};

const setTeamId = (dispatch) => {
  return (obj) => {
    dispatch({ type: 'teamid', payload: obj });
  };
};

const setPapel = (dispatch) => {
  return (str) => {
    dispatch({ type: 'papel', payload: str });
  };
};


export const { Context, Provider } = createContext(
  reducer,
  {
    setInfos,
    setInfosAluno,
    setTeam,
    setTeamId,
    setPapel,
  },
  initialState,
);