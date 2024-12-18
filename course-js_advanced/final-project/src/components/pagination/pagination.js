import { DivComponent } from '../../common/div-component'
import './pagination.css'

export class Pagination extends DivComponent {
	constructor(state) {
		super()
		this.state = state
	}

	render() {
		this.el.classList.add('pagination')
		const nextPage = document.createElement('button')
		nextPage.setAttribute('data-action', 'next')
		nextPage.classList.add('button', 'button-next')
		nextPage.innerHTML = `
      ${
				this.state.offset < this.state.numFound
					? `<span class="pagination__icon">→</span>Следующая страница`
					: ''
			}
    `
		const prevPage = document.createElement('button')
		prevPage.setAttribute('data-action', 'next')
		prevPage.classList.add('button', 'button-prev')
		prevPage.innerHTML = `
      ${
				this.state.offset > 0
					? `<span class="pagination__icon">←</span>Предыдущая страница`
					: ''
			}
    `
		prevPage.addEventListener('click', () => {
			this.state.offset = this.state.offset - 9 > 0 ? this.state.offset - 9 : 0
		})
		nextPage.addEventListener('click', () => {
			this.state.offset =
				this.state.offset + 9 > this.state.numFound
					? this.state.numFound
					: this.state.offset + 9
		})
		this.el.append(prevPage, nextPage)
		return this.el
	}
}
