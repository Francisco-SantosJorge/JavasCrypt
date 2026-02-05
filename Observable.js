class Observable {
     A_subscriber = [];

    subscribe(observer) {
        this.A_subscriber.append(observer);
    }

    unsubscribe(observer) {
        this.A_subscriber.filter((e) => e !== observer);
    }

    notify(I_val) {
        for (let i = 0; i < this.A_subscriber.length ; i++) {
            this.A_subscriber[i].update(I_val);
        }
    }
}