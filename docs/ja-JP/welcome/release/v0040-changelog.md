# v0.4：2021-04-07

## Merged

- refactor: use boolean value instead of null #74
- refactor: app middlewares 17362a8
- chore(versions): publish packages 0.4.0-alpha.2 c2f1876
- fix: minor problems [`#72`](https://github.com/nocobase/nocobase/pull/72)
- Develop [`#68`](https://github.com/nocobase/nocobase/pull/68)
- Feature: plugin-china-region [`#66`](https://github.com/nocobase/nocobase/pull/66)
- Feature: filter for linkTo field [`#64`](https://github.com/nocobase/nocobase/pull/64)
- fix: make default view/tab cannot be destroyed [`#63`](https://github.com/nocobase/nocobase/pull/63)
- Feature/plugin automations [`#65`](https://github.com/nocobase/nocobase/pull/65)
- Feature/action logs [`#62`](https://github.com/nocobase/nocobase/pull/62)
- Feature/action logs [`#61`](https://github.com/nocobase/nocobase/pull/61)
- Feature/destroy lock [`#60`](https://github.com/nocobase/nocobase/pull/60)
- fix: ignore some typescript error [`#59`](https://github.com/nocobase/nocobase/pull/59)
- feat: route permissions [`#58`](https://github.com/nocobase/nocobase/pull/58)
- Feature: add permission plugin api [`#57`](https://github.com/nocobase/nocobase/pull/57)
- fix: updatedBy foreignKey [`#56`](https://github.com/nocobase/nocobase/pull/56)
- feat: add permissions plugin [`#53`](https://github.com/nocobase/nocobase/pull/53)
- fix: updatedBy field in bulkUpdate hook [`#54`](https://github.com/nocobase/nocobase/pull/54)
- test: skip bug test cases for ci passing [`#52`](https://github.com/nocobase/nocobase/pull/52)
- fix: avoid bug when update other field [`#51`](https://github.com/nocobase/nocobase/pull/51)
- feat: date-only operators [`#50`](https://github.com/nocobase/nocobase/pull/50)
- Feature field for set default [`#49`](https://github.com/nocobase/nocobase/pull/49)
- Feature: custom operators for querying [`#48`](https://github.com/nocobase/nocobase/pull/48)
- fix: toInclude bug with nested associations [`#47`](https://github.com/nocobase/nocobase/pull/47)
- feat: make single file upload to attachment available [`#46`](https://github.com/nocobase/nocobase/pull/46)
- feature: add file manager base architecture [`#44`](https://github.com/nocobase/nocobase/pull/44)
- feat: add createdBy/updatedBy field config for table managed by collections [`#43`](https://github.com/nocobase/nocobase/pull/43)
- fix: use wrapped and logic for merging filters [`#42`](https://github.com/nocobase/nocobase/pull/42)
- fix: filterByFields should return same value when input == null (close 0) [`#41`](https://github.com/nocobase/nocobase/pull/41)
- fix: Symbol property could not be iterated in for-in [`#39`](https://github.com/nocobase/nocobase/pull/39)
- Feature/sort [`#38`](https://github.com/nocobase/nocobase/pull/38)
- refactor: change sort strategy from offset to targetId [`#37`](https://github.com/nocobase/nocobase/pull/37)
- Feature/sort [`#36`](https://github.com/nocobase/nocobase/pull/36)
- feat: add filter and transaction for destroy action [`#35`](https://github.com/nocobase/nocobase/pull/35)
- fix: field filter logic for create/update [`#34`](https://github.com/nocobase/nocobase/pull/34)
- Feature: action fields options for create/update [`#32`](https://github.com/nocobase/nocobase/pull/32)
- Fix: change strategy from add to set for updateAssociations [`#33`](https://github.com/nocobase/nocobase/pull/33)
- Test/ci [`#31`](https://github.com/nocobase/nocobase/pull/31)
- feat: improve collection hooks/fields/actions/views... [`#30`](https://github.com/nocobase/nocobase/pull/30)
- Fix/model update associations [`#29`](https://github.com/nocobase/nocobase/pull/29)
- fix: database test cases and table options [`#28`](https://github.com/nocobase/nocobase/pull/28)
- feat: add virtual attribute geter & setter support [`#27`](https://github.com/nocobase/nocobase/pull/27)
- feat: collection options & hooks [`#21`](https://github.com/nocobase/nocobase/pull/21)
- feat(users): add users module [`#26`](https://github.com/nocobase/nocobase/pull/26)
- feat: add sort action [`#22`](https://github.com/nocobase/nocobase/pull/22)
- Test/list [`#19`](https://github.com/nocobase/nocobase/pull/19)
- feat: pagination options [`#20`](https://github.com/nocobase/nocobase/pull/20)
- test: refactor test in database and add more [`#17`](https://github.com/nocobase/nocobase/pull/17)
- feat: actions & views [`#18`](https://github.com/nocobase/nocobase/pull/18)
- Test cases for database [`#16`](https://github.com/nocobase/nocobase/pull/16)
- Refactor: change global injection of test for actions package. [`#15`](https://github.com/nocobase/nocobase/pull/15)
- feat: improve plugins [`#14`](https://github.com/nocobase/nocobase/pull/14)
- Doc: add README.md for server. [`#12`](https://github.com/nocobase/nocobase/pull/12)
- fix: parseRequest & registerHandlers [`#10`](https://github.com/nocobase/nocobase/pull/10)
- fix #9 [`#11`](https://github.com/nocobase/nocobase/pull/11)
- feat: support register and call partial actions [`#7`](https://github.com/nocobase/nocobase/pull/7)
- 发布核心框架 [`#6`](https://github.com/nocobase/nocobase/pull/6)

## Fixed

- fix #9 (#11) [`#9`](https://github.com/nocobase/nocobase/issues/9) [`#9`](https://github.com/nocobase/nocobase/issues/9)
- fix: improve login form styles 5319000
- fix: error message for login and registration 214b227

## Commits

- chore: adjust parameters [`b95e2da`](https://github.com/nocobase/nocobase/commit/b95e2da129aa49b5d8fb3e31ba8975818f7053cb)
- first commit [`e5d30b3`](https://github.com/nocobase/nocobase/commit/e5d30b30ba4dd38de764b0e5044f836f04a03706)
- style: code formatting [`ce4a22f`](https://github.com/nocobase/nocobase/commit/ce4a22fbb9b1ba9b88db1dc86609e94944f9d904)
