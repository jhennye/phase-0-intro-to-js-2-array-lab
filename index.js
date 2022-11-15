  const cats = ["Milo", "Otis", "Garfield"];


  function destructivelyAppendCat(name) {
    cats.push(name)
  } ;
  function destructivelyPrependCat(name) {
    cats.unshift(name)
  } ;

  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }
  function destructivelyRemoveFirstCat(name){
  cats.shift(name);
  }

  function appendCat(name) {
    const oneCat = [...cats, name];
    return oneCat
  }
  function prependCat(name) {
    const oneCat = [name, ...cats]
    return oneCat
  }
  function removeLastCat(name) {
    cats.unshift();
    const copyCats = cats.slice();
    return cats
  }
