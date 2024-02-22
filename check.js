function estPalindrome(mot) {
  const longueur = mot.length;

  for (let i = 0; i < longueur / 2; i++) {
    if (mot[i] !== mot[longueur - 1 - i]) {
      return false;
    }
  }
  return true;
}
