

export default function Hero(){
    return (<>
    <hr />
        <h1>this is Hero section</h1>
        


        <section className="hero-section">
            <div className="hero-card">
                <div className="terminal-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="terminal-content">
                    <p><span className="code-muted">const</span> developer = &#123;</p>
                    <p>&nbsp;&nbsp;name:<span className="code-string">"Ilyass Oudli"</span></p>
                    <p>&nbsp;&nbsp;role:<span className="code-string">"Software Engineer"</span></p>
                    <p>&nbsp;&nbsp;focus: [<span className="code-string"></span></p>
                    <p>&nbsp;&nbsp;&nbsp;<span className="code-string">"Automation"</span>","</p>
                    <p>&nbsp;&nbsp;&nbsp;<span className="code-string">"Full-Stack Development"</span>","</p>
                    <p>&nbsp;&nbsp;&nbsp;<span className="code-string">"Reliable Software"</span></p>
                    <p>&nbsp;&nbsp;],</p>
                    <p>&nbsp;&nbsp;available: <span class="code-value">true</span></p>
                    <p>&#125;;</p>
                    <p class="terminal-output">✓ Ready to build</p>
                </div>
            </div>
            <div className="hero-content"></div>
            <div className="hero-title"></div>
        </section>
    </>)
}