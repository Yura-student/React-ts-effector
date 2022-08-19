import { Button, Modal, Radio } from 'antd';
import { useForm } from 'effector-forms'
import { useStore } from 'effector-react'
import { $VisibleModal, addModalForm, closeModal, openModal } from 'src/API/cheques/store/addCheques';
  
export const Mod = () => {    
  const { values, fields, submit } = useForm(addModalForm)
  const visibleModal = useStore($VisibleModal)
  
  const handleOk = () => {
    submit();
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <>
      <Button type="primary" onClick={() => openModal()}>
        Добавить
      </Button>
      <Modal
        title="Добавление чека"
        visible={visibleModal}
        onOk = {handleOk}
        okText = 'Добавить'
        cancelText = 'Закрыть'
        onCancel={handleCancel}
      >
        {<label htmlFor="start">Дата и время: </label>}
        <div className='valid'>
            {!fields.dateReg.isValid && 
                "Поставтье дату и время"
            }
        </div>
        <input
            type='datetime-local'
            className={`add ${!fields.dateReg.isValid && 'text-field__input_invalid'}`}
            id='start'
            min='2020-01-01'
            max='2022-12-31'
            value={values.dateReg}
            onChange={ event => fields.dateReg.onChange(event.target.value)
            }
        />
        <div className='valid' >
            {!fields.kioskName.isValid && 
                "Заполните поле"
            }
        </div>
        <input
            type='text'
            className={`add ${!fields.kioskName.isValid && 'text-field__input_invalid'}`}
            placeholder='Введите киоск'
            value={values.kioskName}
            onChange={ event => fields.kioskName.onChange(event.target.value) }
        />
        <div className='valid'>
            {!fields.pay.isValid && 
                "Добавтье внесенную сумму"
            }
        </div>
        <input
            type='number'
            min='0'
            className={`add ${!fields.pay.isValid && 'text-field__input_invalid'}`}
            placeholder='Внесено'
            value={values.pay}
            onChange={ event => fields.pay.onChange(event.target.value) }
        />
        <div className='valid'>
            {!fields.sum.isValid && 
                "Укажите сумму оплаты"
            }
        </div>
        <input
            type='number'
            min='0'
            className={`add ${!fields.sum.isValid && 'text-field__input_invalid'}`}
            placeholder='Сумма оплаты'
            value={values.sum}
            onChange={ event => fields.sum.onChange(event.target.value) }
        />
        <div className='valid'>
            {!fields.positions.isValid && 
                "Введите количество товара"
            }
        </div>
        <input
            type='number'
            min='1'
            className={`add ${!fields.positions.isValid && 'text-field__input_invalid'}`}
            placeholder='Кол-во товара'
            value={values.positions}
            onChange={ event => fields.positions.onChange(event.target.value) }
        />
       <div className='valid'>
            {!fields.positionsName.isValid && 
                "Введите необходимые товары"
            }
        </div>
        <input
            type='string'
            className={`add ${!fields.positionsName.isValid && 'text-field__input_invalid'}`}
            placeholder='Товары'
            value={values.positionsName}
            onChange={ event => fields.positionsName.onChange(event.target.value) }
        />
        <div className='valid'>
            {!fields.chequeType.isValid && 
                "Выберите значение"
            }
        </div>
        <Radio.Group 
        value={values.chequeType}
        onChange={ event => fields.chequeType.onChange(event.target.value) } >
        <Radio.Button value='0'>Продажа</Radio.Button>
        <Radio.Button value='1'>Возврат</Radio.Button>
        </Radio.Group>
        </Modal>
    </>
  );
};

export default Mod;