import React from 'react'
import { sumValues, minusValues } from '../store/calculate/action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function Calculator({ sumValues, minusValues, result }) {


    const inputA = React.useRef(null);
    const inputB = React.useRef(null);
    const [calculateTypeState, setCalculateTypeState] = React.useState('SUM');

    const doCalculate = ({ firstNumber, secondNumber }) => {
        switch (calculateTypeState) {
            case 'SUM':
                sumValues({ firstNumber, secondNumber })
                break;
            case 'MINUS':
                minusValues({ firstNumber, secondNumber })
                break;
        }
    }

    const getInputValues = () => {
        const firstNumber = inputA.current.value;
        const secondNumber = inputB.current.value;
        return { firstNumber, secondNumber }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!inputA.current.value && !inputB.current.value) return
        doCalculate(getInputValues());
    }

    const setCalculateType = (event) => {
        setCalculateTypeState(event.target.value);
    }

    React.useEffect(() => {
        if (!inputA.current.value && !inputB.current.value) return
        doCalculate(getInputValues());
    }, [calculateTypeState])

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input ref={inputA} placeholder='0' type='number' />
                <br />
                <input ref={inputB} placeholder='0' type='number' />
                <div onChange={setCalculateType.bind(this)}>
                    <input type='radio' name='calculateType' checked={calculateTypeState === 'SUM'} value='SUM' />Topla
                    <br />
                    <input type='radio' name='calculateType' checked={calculateTypeState === 'MINUS'} value='MINUS' />Çıkar
                </div>
                <b>result: {result}</b>
                <input type='submit' value='SUM' />
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    result: state.calculate.result,
})


const mapDispatchToProps = (dispatch) => {
    return {
        sumValues: bindActionCreators(sumValues, dispatch),
        minusValues: bindActionCreators(minusValues, dispatch),
    }
}
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return { ...ownProps, ...stateProps, ...dispatchProps }
}

const options = {
    areStatesEqual: (prev, next) => {
        return prev.calculate.result === next.calculate.result
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(Calculator)


