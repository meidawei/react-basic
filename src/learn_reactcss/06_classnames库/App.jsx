import React, { PureComponent } from 'react'
import classNames from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      isbbb: false,
      isccc: true,
    }
  }

  render() {
    const { isbbb, isccc } = this.state

    const classList = ['aaa']
    if (isbbb) classList.push('bbb')
    if (isccc) classList.push('ccc')
    const classname = classList.join(' ')

    return (
      <div>
        <h2 className={`aaa ${isbbb ? 'bbb' : ''} ${isccc ? 'ccc' : ''}`}>
          哈哈哈
        </h2>
        <h2 className={classname}>呵呵呵</h2>

        <h2 className={classNames('aaa', { bbb: true, ccc: isccc })}>嘿嘿嘿</h2>
        <h2 className={classNames(['aaa', { bbb: isbbb, ccc: isccc }])}>
          嘻嘻嘻
        </h2>
        <h4
          className={classNames(['aaa', { bbb: true, ccc: false, ddd: true }])}
        >
          本人哆啦A梦
        </h4>
      </div>
    )
  }
}

export default App
