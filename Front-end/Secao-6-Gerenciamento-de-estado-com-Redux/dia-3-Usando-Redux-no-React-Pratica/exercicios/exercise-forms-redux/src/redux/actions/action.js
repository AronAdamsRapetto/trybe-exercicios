export const UPDATE_PERSONAL_INFO = 'UPDATE_PERSONAL_INFO';
export const UPDATE_PROFESSIONAL_INFO = 'UPDATE_PROFESSIONAL_INFO';

export const saveUserInfo = (typeInfo, infos) => ({
  type: typeInfo,
  data: { ...infos },
});
