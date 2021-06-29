class Editor extends React.Component {
    render() {
        return (
                <div>
                    <h1>Hello, {this.props.name}</h1>
                    <hr/>
                    <div id="toolstatus"></div>
                    <hr/>
                    <div id="container"></div>
                    <hr/>
                    <div id="info"></div>
                </div>
                );
    }
}
ReactDOM.render(
        <Editor name="Andres"/>,
        document.getElementById('root')
        );