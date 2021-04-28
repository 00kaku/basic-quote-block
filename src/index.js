import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
	MediaPlaceholder,
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import quotes from './assets/quotes.svg';
registerBlockType( 'basic/quote-block', {
	apiVersion: 2,
	title: __( 'Basic Quote Block' ),
	icon: 'lightbulb',
	category: 'design',
	attributes: {
		quote: {
			type: 'string',
		},
		author: {
			type: 'string',
		},
		citation: {
			type: 'string',
		},
		color: {
			type: 'string',
		},
		imgUrl: {
			type: 'string',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const blockProps = useBlockProps();
		return (
			<div { ...blockProps }>
				<InspectorControls key="settings">
					<PanelBody title="Theme Color" initialOpen={ true }>
						<ColorPalette
							onChange={ ( color ) => setAttributes( { color } ) }
							value={ attributes.color }
						/>
					</PanelBody>
					<PanelBody title="Author Image" initialOpen={ false }>
						<MediaPlaceholder
							onSelect={ ( el ) => {
								setAttributes( { imgUrl: el.url } );
							} }
							allowedTypes={ [ 'image' ] }
							multiple={ false }
						/>
					</PanelBody>
				</InspectorControls>

				<div
					className="quote__header"
					style={ {
						'border-top': `2px solid ${ attributes.color }`,
					} }
				>
					<img
						src={ quotes }
						className="quotes__image"
						alt="Quote:"
					/>
					<RichText
						value={ attributes.quote }
						onChange={ ( quote ) => setAttributes( { quote } ) }
						placeholder={ 'Quote...' }
					/>
				</div>

				<div className="quote__footer">
					<div className="quote__footer__text">
						<RichText
							value={ attributes.citation }
							onChange={ ( citation ) =>
								setAttributes( { citation } )
							}
							placeholder={ 'Citation...' }
							tagName="h3"
							style={ { color: attributes.color } }
							className="citation"
						/>
						<RichText
							value={ attributes.author }
							onChange={ ( author ) =>
								setAttributes( { author } )
							}
							placeholder={ 'Author...' }
							tagName="h4"
							className="author"
						/>
					</div>
					<div style={ { display: 'flex' } }>
						<div className="image__outer">
							<div className="image">
								<img
									src={
										attributes.imgUrl ||
										'https://via.placeholder.com/50x50'
									}
									alt={ `Author: ${
										attributes.author || 'Unknown'
									}` }
								/>
							</div>
						</div>
						{ attributes.imgUrl && (
							<button
								style={ {
									maxHeight: '25px',
									background: '#ff0033',
									border: 'none',
									color: '#fff',
									textAlign: 'center',
									borderRadius: '5px',
								} }
								onClick={ () =>
									setAttributes( { imgUrl: null } )
								}
							>
								{ __( 'x' ) }
							</button>
						) }
					</div>
				</div>
			</div>
		);
	},
	save: ( { attributes } ) => {
		const blockProps = useBlockProps.save();
		return (
			<div { ...blockProps }>
				<div
					className="quote__header"
					style={ {
						'border-top': `2px solid ${ attributes.color }`,
					} }
				>
					<img
						src={ quotes }
						className="quotes__image"
						alt="Quote:"
					/>
					<p className="quote__quote">{ __( attributes.quote ) }</p>
				</div>
				<div className="quote__footer">
					<div className="quote__footer__text">
						<h3 style={ { color: attributes.color } }>
							{ __( attributes.citation ) }
						</h3>
						<h4>{ __( attributes.author ) }</h4>
					</div>
					<div className="image__outer">
						<div className="image">
							<img
								src={
									attributes.imgUrl ||
									'https://via.placeholder.com/50x50'
								}
								alt={ `Author: ${
									attributes.author || 'Unknown'
								}` }
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
