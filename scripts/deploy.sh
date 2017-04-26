sh scripts/delete_tsc_filtes.sh
tsc
cp src/button-dropdown.module.ts src/button-dropdown.module.d.ts
release-it
sh scripts/delete_tsc_filtes.sh


# sh scripts/delete_tsc_filtes.sh
# npm run build:aot
# # npm run rollup
# # mv build-rollup.js index.js
# cp src/slider/slider.module.ts src/slider/slider.module.d.ts
# # release-it
# # sh scripts/delete_tsc_filtes.sh

# scripts": {
#     "build:aot": "node_modules/.bin/ngc -p tsconfig-aot.json",
#     "rollup": "node_modules/.bin/rollup -c rollup-config.js"

# "devDependencies": {
#     "@angular/compiler-cli": "^4.0.3",
#     "@angular/platform-server": "^4.0.3",
#     "rollup": "^0.41.6",
#     "rollup-plugin-commonjs": "^8.0.2",
#     "rollup-plugin-node-resolve": "^3.0.0",
#     "rollup-plugin-uglify": "^1.0.2",
#     "typescript": "^2.2.2"