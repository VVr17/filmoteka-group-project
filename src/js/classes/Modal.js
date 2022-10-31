import ModalBtn from './ModalBtn';
const modalButtons = new ModalBtn();

export default class Modal {
  constructor(selectors) {
    this.refs = this.getRefs(selectors);
  }

  getRefs(selectors) {
    const { openModalBtn, closeModalBtn, modal } = selectors;

    const refs = {};
    if (openModalBtn) refs.openModalBtn = document.querySelector(openModalBtn);
    refs.closeModalBtn = document.querySelector(closeModalBtn);
    refs.modal = document.querySelector(modal);
    return refs;
  }

  addHandler() {
    this.refs.openModalBtn?.addEventListener('click', event =>
      this.openModal(event)
    );
    this.refs.closeModalBtn?.addEventListener('click', () => this.closeModal());
    this.refs.modal?.addEventListener('click', event =>
      this.onBackdropClick(event)
    );
    if (this.refs.modal.hasAttribute('data-modal'))
      this.refs.modal?.addEventListener('click', event =>
        modalButtons.onModalBtnClick(event.target)
      );
    if (this.refs.modal.hasAttribute('data-modal'))
      this.refs.modal?.addEventListener('click', event =>
        this.onFlipImgClick(event)
      );
  }

  openModal(event) {
    event?.preventDefault();
    this.refs.modal.classList.remove('is-hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', this.onEscKeyDown);
  }

  closeModal = () => {
    this.refs.modal.classList.add('is-hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', this.onEscKeyDown);
  };

  onBackdropClick(event) {
    if (event.target.closest('.js-modal')) return;
    this.closeModal();
  }

  onEscKeyDown = event => {
    // console.log(event.target);
    if (event.code !== 'Escape') return;
    this.closeModal();
  };

  onFlipImgClick(event) {
    const flipImgRef = event.target.closest('#flip-wrapper');
    if (flipImgRef) flipImgRef.classList.toggle('is-flipped');
  }
}
