import './ImportantLinks.css';

function ImportantLinks(){
    return (
        <div className="panel">
            <p className="panel-heading">Important Links</p>
            <a className="panel-block has-text-link" href="/register">Register</a>
            <a className="panel-block has-text-link" href="/howto">How to MUN</a>
            <a className="panel-block has-text-link" href="/sources">Approved Sources</a>
        </div>
    )
}

export default ImportantLinks;
