import Button from 'react-bootstrap/Button';
import styles from './style.module.css'
import Modal from 'react-bootstrap/Modal';
function LocalModel({childComponent,closeModel}) {
    return (
        <div
            className={`${styles.main} modal show`}

        >
            <div className={styles.body}>
                <div closeButton className={styles.head}>
                    <Modal.Title>Modal title</Modal.Title>
                </div>

                <div className={styles.modelBody}>
                  {childComponent()}


                    <div>
                        <Button variant="secondary" className='mr-3' onClick={closeModel}>Close</Button>
                        <Button variant="warning " className={styles.btn}>Save changes</Button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LocalModel;