import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	InspectorControls,
	ColorPalette,
} from '@wordpress/block-editor';
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
					<div id="controls">
						<fieldset>
							<legend className="blocks-base-control__label">
								{ __( 'Theme Color', 'basic-quote-block' ) }
							</legend>
							<ColorPalette
								onChange={ ( color ) =>
									setAttributes( { color } )
								}
								value={ attributes.color }
							/>
						</fieldset>
					</div>
				</InspectorControls>
				<h2>{ __( 'BASIC QUOTE BLOCK' ) }</h2>

				<div
					className="quote__header"
					style={ {
						'border-top': `2px solid ${ attributes.color }`,
					} }
				>
					<img
						src={ quotes }
						className="quotes__image"
						alt="Author"
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
						alt="Author"
					/>
					<p className="quote__quote">{ attributes.quote }</p>
				</div>
				<div className="quote__footer">
					<div className="quote__footer__text">
						<h3 style={ { color: attributes.color } }>
							{ attributes.citation }
						</h3>
						<h4>{ attributes.author }</h4>
					</div>
					<div className="image__outer">
						<div className="image">
							<img
								src={
									attributes.imgUrl ||
									'https://via.placeholder.com/50x50'
								}
								alt="Author"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
