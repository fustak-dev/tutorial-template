import { h, Fragment } from 'preact';
import { s } from '@fustak/s';

function u({ attributes, children, tag, defaultProps = {}, props = {}, ...rest }) {
    const newProps = { ...props, ...rest };
    return h(
        newProps.tag || tag,
        s({ attributes, props: { ...defaultProps, ...newProps } }),
        [].concat.apply([], typeof children === 'string' ? [children] : children)
    );
}

window.h = h;
window.Fragment = Fragment;
window.U = u;
window.u = u;