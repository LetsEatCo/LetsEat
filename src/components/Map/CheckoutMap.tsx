import React from 'react';
import ReactMapGL, {MapboxProps, Marker, ViewState} from 'react-map-gl';
import ReactSVG from 'react-svg';

interface Props {
	latitude: number;
	longitude: number;
}

interface State {
	view: ViewState & MapboxProps;
}

export class CheckoutMap extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.setViewState = this.setViewState.bind(this);
	}
	componentWillMount() {
		this.setState({
			view: {
				width: 390,
				height: 180,
				latitude: this.props.latitude,
				longitude: this.props.longitude as any,
				zoom: 15,
			},
		});
	}

	setViewState(view: ViewState) {
		return this.setState({view});
	}

	render() {
		return (
			<ReactMapGL
				{...this.state.view}
				mapboxApiAccessToken={CONFIG.mapbox.accessToken}
				onViewportChange={this.setViewState}
			>
				<Marker
					latitude={this.props.latitude}
					longitude={this.props.longitude}
					offsetLeft={-20}
					offsetTop={-10}
				>
					<ReactSVG
						src={'https://s3.eu-west-3.amazonaws.com/lets-eat-co/assets/icon-marker.svg'}
						svgStyle={{width: '25px'}}
					/>
				</Marker>
			</ReactMapGL>
		);
	}
}

export default CheckoutMap;
