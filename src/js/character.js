export default function getHealth(character) {
  let status = 'wounded';

  if (character.health > 50) {
    status = 'healthy';
  } else if (character.health < 15) {
    status = 'critical';
  }

  return status;
}