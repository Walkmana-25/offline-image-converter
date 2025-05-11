dev:
	@echo "Starting development server..."
	cd image-converter/ && wasm-pack build -t web --dev
	@echo "Starting web server..."
	deno task dev

build:
	@echo "Building for production..."
	cd image-converter/ && wasm-pack build -t web --release
	@echo "Building web server..."
	deno task build

serve:
	@echo "Starting web server..."
	python3 -m http.server --directory ./dist 8000
