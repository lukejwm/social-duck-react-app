
const TemplateViewer = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="src/webtemplate/index.html" // adjust the path as needed
                title="Web Template"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default TemplateViewer;
