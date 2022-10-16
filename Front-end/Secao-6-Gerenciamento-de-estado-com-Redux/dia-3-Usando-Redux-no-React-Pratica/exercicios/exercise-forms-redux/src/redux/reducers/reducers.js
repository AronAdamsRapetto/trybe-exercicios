import { UPDATE_PERSONAL_INFO, UPDATE_PROFESSIONAL_INFO } from '../actions/action';

const INITIAL_STATE = {
  personalInfo: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
  },
  professionalInfo: {
    curriculo: '',
    cargo: '',
    descricao: '',
  },
};

const perfil = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_PERSONAL_INFO:
    return { ...state, personalInfo: { ...action.data } };
  case UPDATE_PROFESSIONAL_INFO:
    return { ...state, professionalInfo: { ...action.data } };
  default:
    return state;
  }
};

export default perfil;
