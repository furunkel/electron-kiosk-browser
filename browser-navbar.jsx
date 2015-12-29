var config = require('./config')

var BrowserNavbarBtn = React.createClass({
  render: function() {
    return <a href="#" className={this.props.disabled?'disabled':''} title={this.props.title} onClick={this.props.onClick}><i className={'fa fa-'+this.props.icon} /></a>
  }
})

var BrowserNavbarLocation = React.createClass({
  saneUrl: function (url) {
    var re = /^.*?:\/\//
    url = url.replace(re, 'http://')
    if (!url.match(re)) {
      url = 'http://' + url
    }
    return url
  },
  onKeyDown: function (e) {
    if (e.keyCode == 13)
      this.props.onEnterLocation(this.saneUrl(e.target.value))
  },
  onChange: function (e) {
    this.props.onChangeLocation(e.target.value)
  },
  render: function() {
    return <input type="text" onKeyDown={this.onKeyDown} onChange={this.onChange} onContextMenu={this.props.onContextMenu} value={this.props.page.location} />
  }
})

var BrowserNavbar = React.createClass({
  render: function() {
    return <div id="browser-navbar">
      <BrowserNavbarBtn title="Home" icon="home fa-lg" onClick={this.props.onClickHome} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Back" icon="arrow-left fa-lg" onClick={this.props.onClickBack} disabled={!this.props.page.canGoBack} />
      <BrowserNavbarBtn title="Forward" icon="arrow-right fa-lg" onClick={this.props.onClickForward} disabled={!this.props.page.canGoForward} />
      <BrowserNavbarBtn title="Refresh" icon="refresh fa-lg" onClick={this.props.onClickRefresh} disabled={!this.props.page.canRefresh} />
      {config.statusUrl && <BrowserNavbarBtn title="Status" icon="info fa-lg" onClick={this.props.onClickStatus} disabled={false} />}
      {config.logOutUrl && <BrowserNavbarBtn title="Log Out" icon="sign-out fa-lg" onClick={this.props.onClickLogOut} disabled={false} />}
      <div className="input-group">
        <BrowserNavbarLocation onEnterLocation={this.props.onEnterLocation} onChangeLocation={this.props.onChangeLocation} onContextMenu={this.props.onLocationContextMenu} page={this.props.page} />
      </div>
    </div>
  }
})
