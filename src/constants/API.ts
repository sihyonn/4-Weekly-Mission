type UserId = number;
type FolderId = number;

const SAMPLE = Object.freeze({
  FOLDER: '/sample/folder',
  USER: '/sample/user',
});

const USER = Object.freeze({
  DETAIL: (userId: UserId) => {
    return `/users/${userId}`;
  },
});

const FOLDER = Object.freeze({
  USER_FOLDERS: (userId: UserId) => {
    return `/users/${userId}/folders`;
  },
});

const LINK = Object.freeze({
  USER_LINKS: (userId: UserId) => {
    return `/users/${userId}/links`;
  },
  USER_SPECIFIC_LINKS: (userId: UserId, folderId: FolderId) => {
    return `/users/${userId}/links?folderId=${folderId}`;
  },
});

const AUTH = Object.freeze({
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  EMAIL_DUPLICATE: '/check-email',
});

export default { SAMPLE, USER, FOLDER, LINK, AUTH };
