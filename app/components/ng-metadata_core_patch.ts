export interface EventEmitter<T> extends Function {
    emit($event: T):void;
}

export interface EventHandler<T> {
    ($event: T):void;
}

export function EventEmitter_attach_emit<T>(onEventProperty: EventEmitter<T>) {
    onEventProperty.emit = (value:T) => {
        onEventProperty({$event: value});
    }
}