export function onEvent(_selector, _event, _function) {
    try {
        document.querySelectorAll(_selector).forEach(
            selector => selector.addEventListener(
                _event, () => _function(selector)
            )
        )
    } catch {
        console.log("onEvent(selector, event, function) ")
    }
};