
function SceneWrapper({ aspectRatio = null, position = 'relative', children, ...props }) {
    const styles = {
        width: `100%`,
        aspectRatio: aspectRatio && `${aspectRatio}`,
        height: !aspectRatio && `100%`,
        position: `${position}`,
        pointerEvents: 'none',
    }
    return (
        <div style={styles} {...props}>
            {children}
        </div>
    )
}

export default SceneWrapper