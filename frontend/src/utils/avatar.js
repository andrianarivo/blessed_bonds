import { createAvatar } from '@dicebear/core';
import { adventurer } from '@dicebear/collection';

const getAvatar = (name) => {
  const avatar = createAvatar(adventurer, {
    seed: name,
  });

  return avatar.toString();
};

export default getAvatar;
