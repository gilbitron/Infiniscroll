<?php
sleep(2); // Simulate loading time...
$page = isset($_GET['page']) && is_numeric($_GET['page']) ? $_GET['page'] : 1;
?>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="utf-8" />
    <title>Infiniscroll Demo</title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen" />
</head>
<body>

    <div class="content">
        <h1>Page <?php echo $page; ?></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo rhoncus, convallis odio nec, tristique magna. Phasellus pharetra, augue eu ultrices semper, ipsum turpis venenatis neque, eget tincidunt nisi enim eu ante. Sed adipiscing, mauris vel cursus convallis, sapien augue imperdiet metus, a gravida diam quam venenatis lorem. Aenean malesuada, mauris sit amet faucibus convallis, odio dui sodales mi, vitae molestie risus ligula ac orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec varius ligula eu condimentum pharetra. Nullam nec interdum augue. Duis sit amet imperdiet turpis. Curabitur a mi eget arcu luctus tristique a ac arcu. Etiam bibendum enim id nisi fermentum, at rhoncus ipsum iaculis. Mauris posuere egestas porttitor. Mauris sed tortor vestibulum, gravida ligula quis, aliquet ligula. Vivamus vitae mattis lacus, sed consectetur neque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras tincidunt sem ut tortor egestas imperdiet. Donec sem enim, mollis non eros in, rhoncus blandit nisl. Vestibulum orci turpis, congue vel turpis convallis, dictum eleifend velit. Duis mollis dui magna, eu aliquam purus vulputate vitae. Proin ornare bibendum congue. Nam venenatis id neque eget eleifend.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo rhoncus, convallis odio nec, tristique magna. Phasellus pharetra, augue eu ultrices semper, ipsum turpis venenatis neque, eget tincidunt nisi enim eu ante. Sed adipiscing, mauris vel cursus convallis, sapien augue imperdiet metus, a gravida diam quam venenatis lorem. Aenean malesuada, mauris sit amet faucibus convallis, odio dui sodales mi, vitae molestie risus ligula ac orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec varius ligula eu condimentum pharetra. Nullam nec interdum augue. Duis sit amet imperdiet turpis. Curabitur a mi eget arcu luctus tristique a ac arcu. Etiam bibendum enim id nisi fermentum, at rhoncus ipsum iaculis. Mauris posuere egestas porttitor. Mauris sed tortor vestibulum, gravida ligula quis, aliquet ligula. Vivamus vitae mattis lacus, sed consectetur neque.</p>
        <div class="pagination">
            <a href="more.php?page=<?php echo $page + 1; ?>" class="next">Next</a>
        </div>
    </div>

</body>
</html>