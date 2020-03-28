class EventHub {
  private events: { [key: string]: Array<(data: unknown) => void> } = {};
  on(eventName: string, fn: (data: unknown) => void) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(fn);
  }
  off(eventName: string, fn: (data: unknown) => void) {
    let index = indexOf(this.events[eventName], fn);
    if (index !== -1) {
      this.events[eventName].splice(index, 1);
    }
  }
  emit(eventName: string, data?: unknown) {
    (this.events[eventName] || []).forEach(fn => fn(data));
  }
}
export default EventHub;
/**
 * 帮助函数
 * @param events
 * @param item
 */
function indexOf(events, item) {
  if (!events) {
    return -1;
  }
  let index = events.indexOf(item);
  return index;
}
