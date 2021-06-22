.PHONY: build clean watch serve deploy deploy-prod

build: clean
	npm run build

clean:
	npm run clean

watch:
	npm run watch

serve:
	docker compose up -d
	sam local start-api -p 4000

deploy: clean build
	sam deploy --no-confirm-changeset

deploy-prod: clean build
	sam deploy --config-env prod --no-confirm-changeset
