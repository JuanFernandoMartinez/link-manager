
CREATE TABLE CATEGORY
(
    CATEGORY_ID int,
    CATEGORY_TITLE varchar(30),
    primary key (CATEGORY_ID)
);

CREATE TABLE TAG
(
    TAG_ID int,
    TAG_NAME varchar(30),
    primary key(TAG_ID)
);

CREATE TABLE LINK
(
    LINK_ID int,
    LINK_TITLE varchar(100),
    LINK_LINK varchar(800),
    CATEGORY_ID int,
    primary key(LINK_ID),
    foreign key (CATEGORY_ID) references CATEGORY(CATEGORY_ID) 
);

CREATE TABLE LINK_TAG 
(
    LINK_ID INT,
    TAG_ID INT
);