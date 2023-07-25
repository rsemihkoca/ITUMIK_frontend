all: run

.PHONY: all run

run:
	@echo "########################################"; \
	echo "Bağımlılıklar Yükleniyor..."; \
	echo "########################################"; \
	echo "          "; \
	npm i; \
	echo "          "; \
	echo "########################################"; \
	echo "Uygulama başlatılıyor..."; \
	echo "########################################"; \
	npm run dev; \
	echo "          ";