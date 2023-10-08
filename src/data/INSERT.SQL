-- category inserts
INSERT INTO CATEGORY 
(
    CATEGORY_ID,
    CATEGORY_TITLE
) VALUES
(
    1, 'Spring'
);

INSERT INTO CATEGORY 
(
    CATEGORY_ID,
    CATEGORY_TITLE
) VALUES
(
    2, 'React'
);


-- tag inserts

INSERT INTO TAG
(
    TAG_ID, TAG_NAME
) VALUES
(
    1, 'Programación'
);

INSERT INTO TAG
(
    TAG_ID, TAG_NAME
) VALUES
(
    2, 'Frontend'
);

INSERT INTO TAG
(
    TAG_ID, TAG_NAME
) VALUES
(
    3, 'Backend'
);

-- link inserts

INSERT INTO LINK 
(
    LINK_ID,
    LINK_TITLE,
    LINK_LINK,
    CATEGORY_ID
) VALUES
(
    1, 'Tutorial Spring', 'youtube.com', 1
);

INSERT INTO LINK 
(
    LINK_ID,
    LINK_TITLE,
    LINK_LINK,
    CATEGORY_ID
) VALUES
(
    2, 'Tutorial React', 'google.com', 2
);

-- link_tag inserts

INSERT INTO LINK_TAG
(
    LINK_ID, TAG_ID
) VALUES
(
    1, 1
);

INSERT INTO LINK_TAG
(
    LINK_ID, TAG_ID
) VALUES
(
    2, 1
);

INSERT INTO LINK_TAG
(
    LINK_ID, TAG_ID
) VALUES
(
    1, 2
);

INSERT INTO LINK_TAG
(
    LINK_ID, TAG_ID
) VALUES
(
    2, 3
);
