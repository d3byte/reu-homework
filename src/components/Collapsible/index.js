import BaseComponent from '../../base/component';
import './style.less';

function Collapsible () {
	block = null;
	desiredHeight = 0;
	isAttached = false;
	noAnimation = false;

	updateHeight = (size, animated) => {
		// Consider 'auto' as '', to take full size.
		size = size === 'auto' ? '' : size;

		let willAnimate = animated && !this.noAnimation && this.isAttached &&
		  this.desiredHeight !== size;

		this.desiredHeight = size;

		this._updateTransition(false);
		// If we can animate, must do some prep work.
		if (willAnimate) {
		  // Animation will start at the current size.
		  const startSize = this._calcSize();
		  // For `auto` we must calculate what is the final size for the animation.
		  // After the transition is done, _transitionEnd will set the size back to
		  // `auto`.
		  if (size === '') {
			this.block.style.maxHeight = '';
			size = this._calcSize();
		  }
		  // Go to startSize without animation.
		  this.block.style.maxHeight = startSize;
		  // Force layout to ensure transition will go. Set scrollTop to itself
		  // so that compilers won't remove it.
		  this.block.scrollTop = this.block.scrollTop;
		  // Enable animation.
		  this._updateTransition(true);
		  // If final size is the same as startSize it will not animate.
		  willAnimate = (size !== startSize);
		}
		// Set the final size.
		this.block.style.maxHeight = size;
		const timeout = setTimeout(() => {
		  this.block.style.maxHeight = this.desiredHeight;
		}, 300);
		// If it won't animate, call transitionEnd to set correct classes.
		if (!willAnimate) {
		  clearTimeout(timeout);
		  this._transitionEnd();
		}
	  }

	  _updateTransition = (enabled) => {
		this.block.style.transitionDuration = (enabled && !this.noAnimation) ? '' : '0s';
	  }

	  _transitionEnd = () => {
		this.block.style.maxHeight = this.desiredHeight;
		this._updateTransition(false);
	  }

	  _calcSize = () => {
		return this.block.getBoundingClientRect().height.toString() + 'px';
	  }


    componentDidMount() {
		this.isAttached = true;
        this.updateHeight(!this.props.collapsed ? 'auto' : '0px', false);
    }

    componentDidUpdate(prevProps, prevState) {
		if (this.props.collapsed !== prevProps.collapsed) {

			this.updateHeight(!this.props.collapsed ? 'auto' : '0px', true);
		}
    }

    render() {
        return (
            <div ref={ref => this.block = ref} className={`collapsible-block ${this.props.className}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Collapsible;