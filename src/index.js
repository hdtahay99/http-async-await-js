
// import { init } from './js/chistes-page';

// import { init }  from './js/usuarios-page';

// import { obtenerUsuarios } from './js/http-provider';

// init();

import * as CRUD  from './js/crud-provider';


CRUD.getUsuario(2).then(console.log);
CRUD.postUsuario({
    name: 'Heansell',
    job: 'Engineer'
}).then(console.log);

CRUD.putUsuario({
    id: 2,
    name: 'Heansell',
    job: 'Engineer'
}).then(console.log);

CRUD.deleteUsuario(100).then(console.log);