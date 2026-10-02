# DSH Việt Nam

Plugin cho [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) gồm ba phần:

- **Tiếng Việt cho toàn bộ giao diện dsh**: 2.615 chuỗi trong 58 namespace của dsh 0.2.0-rc.2, dịch đủ 100%.
- **Ba bảng màu Việt**, mỗi bảng có bản sáng và tối: Sơn mài, Hạ Long sương, Lụa Hội An.
- **Hình nền phong cảnh Việt Nam tự đổi**: ảnh lấy từ Wikimedia Commons, có ghi tác giả và giấy phép.

![Sơn mài, chế độ tối, nền Tam Cốc, Độ hiện ảnh = 100](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/vivid-sonmai-dark.jpg)

*Sơn mài (tối) trên nền Tam Cốc, mặc định (Độ hiện ảnh = 100).*

| Hạ Long sương (sáng), mặc định | Lụa Hội An (tối), Độ hiện ảnh = 40 |
|---|---|
| ![Hạ Long sương](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/vivid-halong-light.jpg) | ![Lụa Hội An](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/hoian-dark.jpg) |

| Hạ Long sương, Độ hiện ảnh = 40 (chữ dễ đọc nhất) | Sơn mài (tối), Độ hiện ảnh = 40 |
|---|---|
| ![Hạ Long sương mặc định](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/halong-light.jpg) | ![Sơn mài mặc định](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/hero-sonmai-dark.jpg) |

| Cài đặt "Giao diện Việt" | Giao diện tiếng Việt | Điện thoại |
|---|---|---|
| ![Hàng cài đặt Giao diện Việt](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/settings-viet-row.jpg) | ![Cài đặt chung bằng tiếng Việt](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/settings-language.jpg) | ![Lụa Hội An trên điện thoại](https://raw.githubusercontent.com/DucLong06/dsh-vietnam/main/docs/screenshots/mobile-hoian-light.jpg) |

## Yêu cầu

- dsh **0.2.0-rc.1 trở lên**. Các bản cũ hơn chưa có API `addLanguage` nên không thêm được tiếng Việt.
- Plugin chỉ chạy ở profile `web` và `desktop`.

## Cài đặt

```bash
dsh plugin --profile web add dsh-vietnam
```

Hoặc trong dsh: **Plugin** → **Thêm plugin** → ô **Tên gói hoặc địa chỉ** → gõ `dsh-vietnam` → **Cài đặt**. Muốn dùng bản mới nhất trên GitHub thì cài bằng `github:DucLong06/dsh-vietnam`.

Khởi động lại `dsh web`, sau đó:

1. Vào **Settings → General → Language**, chọn **Tiếng Việt**.
2. Kéo xuống mục **Giao diện Việt** để chọn bảng màu, chế độ sáng/tối và bật/tắt hình nền.

Gỡ cài đặt:

```bash
dsh plugin --profile web remove dsh-vietnam
```

## Tính năng

### Tiếng Việt

- Thêm "Tiếng Việt" vào danh sách ngôn ngữ của dsh. Chuỗi nào chưa có bản dịch sẽ tự hiện tiếng Anh, nên giao diện không bao giờ bị trống.
- Thuật ngữ thống nhất theo [bảng thuật ngữ](https://github.com/DucLong06/dsh-vietnam/blob/main/docs/glossary.md). Một số từ chuyên ngành được giữ nguyên: agent, subagent, skill, plugin, token.
- Token lệnh gạch chéo (`/compact`, `/plan`…) **không dịch**, vì dsh chỉ nhận lệnh gõ bằng token tiếng Anh hoặc tiếng Trung.

### Bảng màu

| Bảng màu | Tông chủ đạo |
|---|---|
| **Sơn mài** | đen sơn, đỏ son, vàng dát, ngà |
| **Hạ Long sương** | xanh ngọc, xám đá vôi, trắng sương |
| **Lụa Hội An** | lụa vàng nhạt, lục bảo, vàng nghệ, đỏ đèn lồng |

- Mỗi bảng màu có ba chế độ: **Sáng**, **Tối**, **Theo hệ thống** (tự đổi theo hệ điều hành).
- Mọi cặp màu chữ/nền đặc đều được test tự động theo chuẩn WCAG AA: chữ thường ≥ 4.5:1, chú thích và biểu tượng trạng thái ≥ 3:1. Chữ đặt trên ảnh nền xem mục Hình nền bên dưới.
- Nếu bạn chọn Sáng/Tối/Theo hệ thống ở mục **Diện mạo** gốc của dsh, plugin sẽ nhường lại giao diện cho dsh. Chọn "Mặc định DSH" trong mục Giao diện Việt sẽ trả về đúng theme bạn dùng trước đó.

### Hình nền Việt Nam

- Có 8 bộ sưu tập: Vịnh Hạ Long · Lan Hạ, Ruộng bậc thang, Tam Cốc · núi đá vôi, Phong Nha · hang động, Sông hồ · thác nước, Làng quê, Biển Việt Nam, Ảnh tuyển chọn Commons. Mặc định bật 6 bộ, tổng cộng khoảng 500 ảnh.
- Ảnh được chọn tự động: ảnh ngang, rộng ≥ 1920px, giấy phép CC0 / Public domain / CC BY / CC BY-SA. Bản đồ, banner và logo bị loại.
- Ảnh đổi sau 1 / 5 / 15 / 30 / 60 phút, chuyển cảnh mờ dần, có hiệu ứng chuyển động chậm (Ken Burns). Nút **Ảnh tiếp** đổi ảnh ngay.
- Có thanh trượt **Độ hiện ảnh** và **Làm mờ ảnh**, cùng ô **Ảnh riêng** để thêm URL ảnh của bạn vào vòng xoay. Ảnh riêng được tải trực tiếp nên không cần máy chủ hỗ trợ CORS, nhưng cũng không được lưu để dùng khi mất mạng.
- **Dễ đọc:** ảnh luôn được phủ ít nhất 65% bằng màu nền của bảng màu. Ở mức mặc định (Độ hiện ảnh = 100, ảnh rõ nhất), chữ chính đạt WCAG AA trên *bất kỳ* điểm ảnh nào. Chữ phụ (mô tả, chú thích) có thể khó đọc trên vùng ảnh có cùng độ sáng; kéo xuống 40 trở xuống thì cả chữ chính lẫn chữ phụ đều đạt AA trên mọi điểm ảnh. Hai cam kết này được test bằng cách quét mọi mức xám của điểm ảnh.
- Chỉ nền trang và thanh bên trong suốt. Hộp thoại, menu, ô nhập, thẻ, header dính và dock hàng đợi luôn đặc màu.
- **Tiết kiệm tài nguyên:** danh sách ảnh của mỗi bộ sưu tập chỉ tải lại tối đa 1 lần/ngày. Slideshow dừng khi tab bị ẩn. Nếu bật *giảm chuyển động* trong hệ điều hành, hiệu ứng chuyển cảnh sẽ tắt.
- **Khi mất mạng:** nếu không tải được ảnh mới, plugin chuyển sang vòng xoay 30 ảnh gần nhất đã lưu trong trình duyệt, và tự quay lại ảnh mới khi có mạng. Nếu chưa lưu ảnh nào thì hiện nền gradient theo bảng màu.
- **Ghi công tác giả:** góc phải dưới luôn hiện tên ảnh, tác giả và giấy phép, bấm vào sẽ mở trang ảnh trên Commons. Giấy phép CC BY / BY-SA yêu cầu ghi công mỗi khi ảnh hiển thị, nên chip này chỉ ẩn khi tắt hình nền.

### Quyền riêng tư

Khi hình nền đang bật, **trình duyệt của bạn gửi request trực tiếp tới `commons.wikimedia.org` và `upload.wikimedia.org`**, nên Wikimedia sẽ thấy địa chỉ IP của bạn. Plugin không gửi bất kỳ dữ liệu dsh nào ra ngoài. Nếu không muốn có request ra ngoài, hãy tắt **Hình nền Việt Nam** trong cài đặt, khi đó bảng màu và tiếng Việt vẫn hoạt động bình thường.

Các lựa chọn của plugin (bảng màu, cài đặt hình nền) được lưu trong `localStorage` của từng trình duyệt.

### Giới hạn đã biết

- Ảnh trên Commons có chất lượng không đều, nên thỉnh thoảng vẫn gặp ảnh kém (biển báo, ảnh mờ…). Bấm **Ảnh tiếp** để bỏ qua.
- Ở chế độ sáng, ảnh nền trông nhạt hơn chế độ tối do lớp phủ màu sáng. Nếu chữ phụ khó đọc trên một ảnh nào đó, bấm **Ảnh tiếp** hoặc giảm "Độ hiện ảnh".
- Các bề mặt đặc màu được nhận diện qua thuộc tính ARIA/`data-*` của dsh. Nếu bản dsh mới thêm thành phần nền đặc khác, thành phần đó có thể bị trong suốt cho tới khi plugin được cập nhật.
- Bản dịch bám theo dsh **0.2.0-rc.2**. Bản dsh mới có thể thêm chuỗi mới, khi đó những chuỗi đó sẽ hiện tiếng Anh cho tới khi được dịch.

## Phát triển

```bash
npm install
npm run typecheck && npm test && npm run build
```

Chạy thử với một profile dsh riêng (dữ liệu nằm trong `./.dev-dsh`, không đụng tới `~/.dsh`):

```bash
PORT=3180 npm run dev:dsh
```

Hoặc chạy bằng bản dsh build từ source checkout:

```bash
DSH_CHECKOUT=/đường/dẫn/deepseek-harness PORT=3080 npm run dev:dsh
```

Lệnh sẽ in ra URL có `?token=…`. Hãy mở đúng URL đó, vì dsh web bắt buộc phải có token.

`lib/` (bản build) được commit cùng mã nguồn để cài thẳng từ GitHub mà không cần chạy script build (pnpm chặn script của dependency từ git). Sau khi sửa `src/`, hãy chạy `npm run build` và commit cả `lib/`; CI sẽ báo lỗi nếu `lib/` bị cũ.

### Cập nhật bản dịch khi dsh ra bản mới

```bash
node scripts/extract-en.mjs /đường/dẫn/deepseek-harness   # chụp lại toàn bộ chuỗi tiếng Anh → upstream/en-<version>.json
node scripts/vi-locales.mjs sync                           # tạo file cho namespace mới, sinh lại index.ts
node scripts/vi-locales.mjs check                          # liệt kê key thiếu / thừa / sai placeholder
```

Bản dịch nằm trong `src/client/locales/vi/<namespace>.json`, mỗi namespace một file. Hãy giữ nguyên mọi `{placeholder}`, và dịch theo [bảng thuật ngữ](https://github.com/DucLong06/dsh-vietnam/blob/main/docs/glossary.md).

### Cấu trúc

```
src/index.ts                 phần host (chỉ để dsh nạp plugin)
src/client/index.ts          gắn các phần bên dưới vào dsh web
src/client/locale/           đăng ký ngôn ngữ vi + 58 từ điển
src/client/locales/vi/       bản dịch (JSON, mỗi namespace một file)
src/client/theme/            3 bảng màu × sáng/tối → token --dsw-alias-*
src/client/backdrop/         Wikimedia, xoay vòng ảnh, cache, lớp kính, ghi công
src/client/settings/         hàng "Giao diện Việt" trong Settings
scripts/                     trích chuỗi upstream, kiểm tra bản dịch, chạy dsh thử
```

## Giấy phép

MIT. Cấu hình build (`tsdown.client.ts`, `web-platform.ts`) được chuyển thể từ
[NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) (MIT).
Ảnh nền thuộc về tác giả của từng ảnh trên Wikimedia Commons, theo giấy phép được ghi trên ảnh.

---

## English

DeepSeek Harness plugin: a complete Vietnamese UI language (2,615 strings), three Vietnamese
palettes (Lacquer, Ha Long mist, Hoi An silk; light + dark), and a rotating Vietnam-landscape
backdrop from Wikimedia Commons with per-photo attribution and an offline cache. Primary text
stays WCAG AA over any photo pixel (secondary text too at photo visibility ≤ 40). Requires
dsh ≥ 0.2.0-rc.1.

```bash
dsh plugin --profile web add dsh-vietnam
```
