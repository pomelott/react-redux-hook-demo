import React from 'react';


class TestLifeTimes extends React.Component<any, any> {

    // static getDerivedStateFromProps(props: any, state: any) {
    //     console.log('getDerivedStateFromProps', props, state);
    // }

    constructor(props: any) {
        console.log('constructor')
        super(props);
        this.state = {
            count: 0
        };
        this.clickHandle = this.clickHandle.bind(this);
    }

    componentWillMount() {
        console.log('component will mount.');
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentWillReceiveProps(props: any, state: any) {
        console.log('componentWillReceiveProps', props, state);
    }

    shouldComponentUpdate(props: any, state: any) {
        console.log('shouldComponentUpdate', props, state);
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    clickHandle() {
        this.setState((preState: any) => {
            console.log('click', preState)
            return JSON.parse(JSON.stringify({
                ...preState,
                count: ++preState.count,
            }))
        })


        // 测试 setState 的 同步批处理 问题; react18 之前有区别， 18之后全部为批处理

        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log('1 === ' + this.state.count);
        // this.setState({
        //     count: this.state.count + 1
        // })
        // console.log('2 === ' + this.state.count);

        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log('3 === ', this.state.count);
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log('4 === ', this.state.count);
        // }, 0)
    }

    render() {
        console.log('render');
        const { count } = this.state;
        return (
            <div className='comp-block'>
                <h2>Test life times</h2>
                <div>{ count }</div>
                <button onClick={this.clickHandle}>click</button>
            </div>
        )
    }

}

// TestLifeTimes.getDerivedStateFromProps(props, state)

export default TestLifeTimes;