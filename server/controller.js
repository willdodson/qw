module.exports = {

  read(req, res){
    let {id} = req.params;
    let shelf = id[0];
    let bin = id[1];
    const db = req.app.get('db');
    db.product([shelf,bin])
    .then(product => {
        res.status(200).send(product)
    })
    .catch(() => res.status(500).send());
  },

  update(req, res){
    let {id} = req.params;
    let {product_name, price} = req.body;
    const db = req.app.get('db');
    db.updateProduct([id[0],id[1],product_name,price])
    .then(product => {
        res.status(200).send(product)
    })
    .catch(() => res.status(500).send());
  },

  add(req, res){
    let {id} = req.params;
    let {product_name, price} = req.body;
    const db = req.app.get('db');
    db.addProduct([id[0],id[1],product_name,price])
    .then(product => {
        res.status(200).send(product)
    })
    .catch(() => res.status(500).send());
  },

  delete(req, res){
    let {id} = req.params;
    const db = req.app.get('db');
    db.deleteProduct([id[0],id[1]])
    .then(product => {
        res.status(200).send(product)
    })
    .catch(() => res.status(500).send());
  }
}
