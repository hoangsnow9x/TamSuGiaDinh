import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route } from 'react-router';
// import history from './history';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Layout from './views/home/layout/master.js';

import './public/css/style.css';
import './public/libs/font-awesome/css/font-awesome.min.css';
import img1 from './public/images/1.jpg';
import img2 from './public/images/2.jpg';
import img3 from './public/images/3.jpg';
import img4 from './public/images/4.png';
import img5 from './public/images/4.jpg';
import img6 from './public/images/5.jpg';
import img_v1 from './public/images/v1.png';

class App extends React.Component {
	render() {

		return (
			<Router>
				<Layout >
					<div className="main">
						<div className="new_post">
							<div className="content_main">

								<div className="content">
									<div className="left">
										<img src={img1} />
										<h1><a href="">Giải cứu phi trường Tân Sơn Nhất, chông gai, nhọc nhằn, hy vọng... không của riêng ai!</a></h1>
										<p>Sau muôn nỗi nhọc nhằn chông gai, đợi chờ và hy vọng..., cuối cùng Thủ tướng Nguyễn Xuân Phúc cũng quyết định: Dừng mọi công trình hạ tầng phụ trợ sân golf Tân Sơn Nhất (khu biệt thự, khách sạn, nhà hàng...vv trong sân golf); để thuê tư vấn nước ngoài mở đường băng số 3 tiết kiệm hiệu quả, nhanh nhất.</p>
									</div>
									<div className="right">
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
										<a href=""> Cách dạy con bướng bỉnh “một phát nghe ngay” không cần quát mắng</a>
									</div>
								</div>

								<div className="sidebar">

								</div>
							</div>
								
						</div>
						<div className="video">
							<div className="head">
								<h3><a href="">video</a></h3>
								<ul>
									<li><a href=""> Thời sự </a></li>
									<li><a href=""> Mẹo vặt </a></li>
									<li><a href=""> Fitness </a></li>
									<li><a href=""> Nội trợ </a></li>
									<li><a href=""> Review </a></li>
									<li><a href=""> Lạ & Hay </a></li>
									<li><a href=""> Funny </a></li>
									<li><a href=""> Sao </a></li>
									<li><a href=""> Làm đẹp </a></li>
									<li><a href=""> Mạng xã hội </a></li>
								</ul>
							</div>
							<div className="video_content">
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồngđột ngột thay đổi kết thúc"</a>
								</div>
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồng đột ngột thay đổi kết thúc"</a>
								</div>
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồng đột ngột thay đổi kết thúc"</a>
								</div>
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồng đột ngột thay đổi kết thúc"</a>
								</div>
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồng đột ngột thay đổi kết thúc"</a>
								</div>
								<div className="video_item">
									<a href=""><img src={img_v1} /></a>
									<a href="">"Sống chung với mẹ chồng đột ngột thay đổi kết thúc"</a>
								</div>
							</div>
						</div>

						<div className="new_post news">
							<div className="head">
								<h3><a href="">Tin tức</a></h3>
								<ul>
									<li><a href=""> Phóng sự </a></li>
									<li><a href=""> Mẹo vặt </a></li>
									<li><a href=""> Pháp luật </a></li>
									<li><a href=""> Kinh doanh </a></li>
									<li><a href=""> Giao thông </a></li>
									<li><a href=""> Môi trường </a></li>
								</ul>
							</div>
							<div className="content_main">
								<div className="content">
									<div className="left">
										<div className="item">
											<a href=""><img src={img1} /></a>
											<a href="">Giải cứu phi trường Tân Sơn Nhất, chông gai, nhọc nhằn, hy vọng... không của riêng ai!</a>
											<p>Sau muôn nỗi nhọc nhằn chông gai, đợi chờ và hy vọng..., cuối cùng Thủ tướng Nguyễn Xuân Phúc cũng quyết định: Dừng mọi công trình hạ tầng phụ trợ sân golf Tân Sơn Nhất (khu biệt thự, khách sạn, nhà hàng...vv trong sân golf); để thuê tư vấn nước ngoài mở đường băng số 3 tiết kiệm hiệu quả, nhanh nhất.</p>
										</div>
										<div className="list">
											<div className="list_item">
												<a href="">​<img src={img2} /></a>
												<a href="">​Du khách Mỹ hết đường vào Triều Tiên</a>
											</div>

											<div className="list_item">
												<a href="">​<img src={img2} /></a>
												<a href="">​Du khách Mỹ hết đường vào Triều Tiên</a>
											</div>

											<div className="list_item">
												<a href="">​<img src={img2} /></a>
												<a href="">​Du khách Mỹ hết đường vào Triều Tiên</a>
											</div>
										</div>
									</div>
									<div className="right">
										<a href=""> Chủ tịch Hà Nội: “Không thể trồng xà cừ cổ thụ trên các tuyến phố”</a>
										<a href=""> Chủ tịch Hà Nội: “Không thể trồng xà cừ cổ thụ trên các tuyến phố”</a>
										<a href=""> Chủ tịch Hà Nội: “Không thể trồng xà cừ cổ thụ trên các tuyến phố”</a>
									</div>
								</div>
								<div className="sidebar">
								</div>
							</div>
								
						</div>
						
						<div className="star">
							<div className="content">
								<div className="head">
									<h3><a href="">Ngôi sao</a></h3>
									<ul>
										<li><a href=""> Showbiz </a></li>
										<li><a href=""> TV Show </a></li>
										<li><a href=""> Bài hát yêu thích </a></li>
										<li><a href=""> Phim hay </a></li>
									</ul>
								</div>

								<div className="content_main">
									<div className="content_head">
										<a href=""><img src={img3} /></a>

										<div className="right">
											<div className="right_item">
												<a href=""> Đồng nghiệp bức xúc bênh Phan Đinh Tùng sau scandal bắt nạt đàn em</a>
												<p>Nhạc sĩ Nguyễn Văn Chung, diễn viên Hữu Công… đã lên tiếng ngay sau khi ca sĩ Phan Đình Tùng bị nhiều người “ném đá” đi trễ show và tỏ thái độ coi thường đàn em gây xôn xao.</p>
											</div>
											<a href="">Hé lộ hóa đơn 7 tỷ Jennifer Lopez vung tay cho 2 ngày du hý với tình trẻ</a>
											<a href="">Terry trêu chọc chỗ nhạy cảm của Fabregas khi hôn bạn gái</a>
										</div>
									</div>
									<div className="content_bot">
										<div className="item">
											<a href=""><img src={img4} /></a>
											<a href="">Diễn viên trẻ bắn chết mẹ và em trai trước khi tự sát</a>
										</div>
										<div className="item">
											<a href=""><img src={img3} /></a>
											<a href="">Ngoại hình đẹp trai ngời ngời, cậu em của Miley Cyrus cũng đã chính thức "tấn công" showbiz!</a>
										</div>
										<div className="item">
											<a href=""><img src={img4} /></a>
											<a href="">Diễn viên trẻ bắn chết mẹ và em trai trước khi tự sát</a>
										</div>
									</div>
									
									<div className="section">
										<div className="item">
											<div className="head">
												<h3><a href="">Thời trang</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img5} /></a>
												<a href="">Hoàng Ku: Giám khảo "cool" nhất The Face, tiết lộ lý do từ chối làm việc cùng Hoàng Thùy lẫn Minh Tú</a>
											</div>
											<a href="">Dân mạng tưởng Trấn Thành mặc… nhầm quần của Hari Won đến dự sinh nhật Subeo vì bó “sít háng”</a>
											<a href="">The Face Việt Nam: "Nữ hoàng đi trễ" Minh Tú để thí sinh bơ vơ tự tập catwalk</a>
											<a href="">Xuất hiện áo lot hình viên đạn của chị em khiến mày râu thấp thỏm</a>
											<a href="">Choáng với cuộc sống sang chảnh tột cùng của công chúa Dubai</a>
											<a href="">Review giày ASICS RoadHawk FF - Sự kết hợp hoàn hảo giữa tốc độ và phong cách</a>

										</div>
										<div className="item">
											<div className="head">
												<h3><a href="">Làm đẹp</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img6} /></a>
												<a href="">Ra mắt Viện điều trị nám chuyên sâu đầu tiên tại Việt Nam</a>
											</div>
											<a href="">Lũ mụn ẩn “cứng đầu” đáng ghét cũng phải chào thua với cách chăm sóc siêu đơn giản này</a>
											<a href="">Ngày càng nhiều mẹ chọn làm đẹp vùng kín ngay khi đẻ xong, chuyên gia nói gì?</a>
											<a href="">Review thuốc nhuộm tóc 3CE Treatment Hair Tint đang hot nhất hiện nay</a>
											<a href="">8 phương pháp làm đẹp siêu lợi hại giúp phụ nữ châu Á “trẻ mãi không già”</a>
											<a href="">Chỉ với 1 quả trứng gà, chị em đã có vô vàn cách trị hết tàn nhang, da bật tông hiệu quả</a>
										</div>
									</div>

									<div className="section">
										<div className="item">
											<div className="head">
												<h3><a href="">Nấu ăn</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img5} /></a>
												<a href="">Hoàng Ku: Giám khảo "cool" nhất The Face, tiết lộ lý do từ chối làm việc cùng Hoàng Thùy lẫn Minh Tú</a>
											</div>
											<a href="">Dân mạng tưởng Trấn Thành mặc… nhầm quần của Hari Won đến dự sinh nhật Subeo vì bó “sít háng”</a>
											<a href="">The Face Việt Nam: "Nữ hoàng đi trễ" Minh Tú để thí sinh bơ vơ tự tập catwalk</a>
											<a href="">Xuất hiện áo lot hình viên đạn của chị em khiến mày râu thấp thỏm</a>
											<a href="">Choáng với cuộc sống sang chảnh tột cùng của công chúa Dubai</a>
											<a href="">Review giày ASICS RoadHawk FF - Sự kết hợp hoàn hảo giữa tốc độ và phong cách</a>

										</div>
										<div className="item">
											<div className="head">
												<h3><a href="">Sức khỏe</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img6} /></a>
												<a href="">Ra mắt Viện điều trị nám chuyên sâu đầu tiên tại Việt Nam</a>
											</div>
											<a href="">Lũ mụn ẩn “cứng đầu” đáng ghét cũng phải chào thua với cách chăm sóc siêu đơn giản này</a>
											<a href="">Ngày càng nhiều mẹ chọn làm đẹp vùng kín ngay khi đẻ xong, chuyên gia nói gì?</a>
											<a href="">Review thuốc nhuộm tóc 3CE Treatment Hair Tint đang hot nhất hiện nay</a>
											<a href="">8 phương pháp làm đẹp siêu lợi hại giúp phụ nữ châu Á “trẻ mãi không già”</a>
											<a href="">Chỉ với 1 quả trứng gà, chị em đã có vô vàn cách trị hết tàn nhang, da bật tông hiệu quả</a>
										</div>
									</div>

									<div className="section">
										<div className="item">
											<div className="head">
												<h3><a href="">Tử vi</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img5} /></a>
												<a href="">Hoàng Ku: Giám khảo "cool" nhất The Face, tiết lộ lý do từ chối làm việc cùng Hoàng Thùy lẫn Minh Tú</a>
											</div>
											<a href="">Dân mạng tưởng Trấn Thành mặc… nhầm quần của Hari Won đến dự sinh nhật Subeo vì bó “sít háng”</a>
											<a href="">The Face Việt Nam: "Nữ hoàng đi trễ" Minh Tú để thí sinh bơ vơ tự tập catwalk</a>
											<a href="">Xuất hiện áo lot hình viên đạn của chị em khiến mày râu thấp thỏm</a>
											<a href="">Choáng với cuộc sống sang chảnh tột cùng của công chúa Dubai</a>
											<a href="">Review giày ASICS RoadHawk FF - Sự kết hợp hoàn hảo giữa tốc độ và phong cách</a>

										</div>
										<div className="item">
											<div className="head">
												<h3><a href="">Phong thủy</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img6} /></a>
												<a href="">Ra mắt Viện điều trị nám chuyên sâu đầu tiên tại Việt Nam</a>
											</div>
											<a href="">Lũ mụn ẩn “cứng đầu” đáng ghét cũng phải chào thua với cách chăm sóc siêu đơn giản này</a>
											<a href="">Ngày càng nhiều mẹ chọn làm đẹp vùng kín ngay khi đẻ xong, chuyên gia nói gì?</a>
											<a href="">Review thuốc nhuộm tóc 3CE Treatment Hair Tint đang hot nhất hiện nay</a>
											<a href="">8 phương pháp làm đẹp siêu lợi hại giúp phụ nữ châu Á “trẻ mãi không già”</a>
											<a href="">Chỉ với 1 quả trứng gà, chị em đã có vô vàn cách trị hết tàn nhang, da bật tông hiệu quả</a>
										</div>
									</div>

									<div className="section">
										<div className="item">
											<div className="head">
												<h3><a href="">Gia đình</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img5} /></a>
												<a href="">Hoàng Ku: Giám khảo "cool" nhất The Face, tiết lộ lý do từ chối làm việc cùng Hoàng Thùy lẫn Minh Tú</a>
											</div>
											<a href="">Dân mạng tưởng Trấn Thành mặc… nhầm quần của Hari Won đến dự sinh nhật Subeo vì bó “sít háng”</a>
											<a href="">The Face Việt Nam: "Nữ hoàng đi trễ" Minh Tú để thí sinh bơ vơ tự tập catwalk</a>
											<a href="">Xuất hiện áo lot hình viên đạn của chị em khiến mày râu thấp thỏm</a>
											<a href="">Choáng với cuộc sống sang chảnh tột cùng của công chúa Dubai</a>
											<a href="">Review giày ASICS RoadHawk FF - Sự kết hợp hoàn hảo giữa tốc độ và phong cách</a>

										</div>
										<div className="item">
											<div className="head">
												<h3><a href="">Xu hướng</a></h3>
											</div>
											<div className="item_top">
												<a href=""><img src={img6} /></a>
												<a href="">Ra mắt Viện điều trị nám chuyên sâu đầu tiên tại Việt Nam</a>
											</div>
											<a href="">Lũ mụn ẩn “cứng đầu” đáng ghét cũng phải chào thua với cách chăm sóc siêu đơn giản này</a>
											<a href="">Ngày càng nhiều mẹ chọn làm đẹp vùng kín ngay khi đẻ xong, chuyên gia nói gì?</a>
											<a href="">Review thuốc nhuộm tóc 3CE Treatment Hair Tint đang hot nhất hiện nay</a>
											<a href="">8 phương pháp làm đẹp siêu lợi hại giúp phụ nữ châu Á “trẻ mãi không già”</a>
											<a href="">Chỉ với 1 quả trứng gà, chị em đã có vô vàn cách trị hết tàn nhang, da bật tông hiệu quả</a>
										</div>
									</div>
								</div>
							</div>
							<div className="sidebar">
							</div>
							
						</div>
							
					</div>
				</Layout>
			</Router>
		);

	}
}

ReactDOM.render(
	<App />
, document.getElementById('root'));
