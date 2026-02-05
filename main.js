let O_observable= new Observable();
let O_realTime= new RealTime();
let O_alert= new Alert();
let O_historic= new Historic();

O_observable.subscribe(O_realTime);
O_observable.subscribe(O_alert);
O_observable.subscribe(O_historic);

O_observable.notify(-2);