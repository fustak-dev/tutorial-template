export function Text({ children, ...props }) {
    return <U tag="p" fontSize="32px" marginTop="16px" { ...props }>{children}</U>;
}